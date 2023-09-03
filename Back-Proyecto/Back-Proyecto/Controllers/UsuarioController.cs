using Back_Proyecto.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Back_Proyecto.Controllers
{
    [ApiController]
    [Route("user")]
    public class UsuarioController : ControllerBase
    {
        
        public IConfiguration _configuration;
        public UsuarioController(IConfiguration configuration) 
        {
            _configuration= configuration;
        }

        [HttpPost]
        [Route("login")]
        public dynamic IniciarSesion([FromBody] object optData)
        {
            var data = JsonConvert.DeserializeObject<dynamic>(optData.ToString());

            string email = data.email.ToString();
            string password = data.password.ToString();

            Usuario usuario = Usuario.DB().Where(x => x.email == email && x.password == password).FirstOrDefault();

            if(usuario == null)
            {
                return new
                {
                    success = false,
                    message = "Credenciales son incorrectas ",
                    result = ""
                };
                 
            }
            var jwt = _configuration.GetSection("Jwt").Get<Jwt>();

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, jwt.Subject),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim ("id", usuario.IdUsuario),
                 new Claim ("email", usuario.email),
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.Key));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                 jwt.Issuer,
                 jwt.Audience,
                 claims,
                 expires: DateTime.Now.AddMinutes(4),
                 signingCredentials: signIn
                );
            return new
            {
                success = true,
                message = "exito",
                result = new JwtSecurityTokenHandler().WriteToken(token)
            };
        }
    }
}
