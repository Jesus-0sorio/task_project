namespace Back_Proyecto.Models
{
    public class Usuario
    {
        public string IdUsuario { get; set; }
        public string email { get; set; }

        public string password { get; set; }

        public static List<Usuario> DB() 
        { 
        var list = new List<Usuario>()

            {
                new Usuario
                {
                    IdUsuario = "1",
                    email = "Harold",
                    password ="casa123"
                    
                },
                new Usuario
                {
                    IdUsuario = "2",
                    email = "Harold",
                    password = "casa123"

                },
                new Usuario
                {
                    IdUsuario = "1",
                    email = "Harold",
                    password = "casa123"

                }

    

            };

            return list;    
        }
    }
}
