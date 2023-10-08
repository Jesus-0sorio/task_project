using Back_Proyecto.Models;
using Back_Proyecto.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Back_Proyecto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignmentController : ControllerBase
    {
        private readonly AssignmentService _assignmentService;

        public AssignmentController(AssignmentService assignmentService)
        {
            _assignmentService = assignmentService;
        }

        [HttpGet]
        public ActionResult<List<Assignment>> GetAllAssignments()
        {
            var assignments = _assignmentService.GetAllAssignments();
            return Ok(assignments);
        }

        [HttpGet("{id}")]
        public ActionResult<Assignment> GetAssignmentById(int id)
        {
            var assignment = _assignmentService.GetAssignmentById(id);
            if (assignment == null)
            {
                return NotFound();
            }
            return Ok(assignment);
        }

        [HttpPost]
        public IActionResult CreateAssignment(Assignment assignment)
        {
            try
            {
                _assignmentService.CreateAssignment(assignment);
                return CreatedAtAction(nameof(GetAssignmentById), new { id = assignment.id }, assignment);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateAssignment(int id, Assignment assignment)
        {
            if (id != assignment.id)
            {
                return BadRequest("ID del modelo y ID de ruta no coinciden.");
            }

            try
            {
                _assignmentService.UpdateAssignment(assignment);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAssignment(int id)
        {
            try
            {
                _assignmentService.DeleteAssignment(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
