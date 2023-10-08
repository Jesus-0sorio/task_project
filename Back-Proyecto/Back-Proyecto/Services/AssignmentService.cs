﻿using Back_Proyecto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Back_Proyecto.Services
{
    public class AssignmentService
    {
        private readonly MyDbContext _context;

        public AssignmentService(MyDbContext context)
        {
            _context = context;
        }

        public List<Assignment> GetAllAssignments()
        {
            return _context.Assignment.ToList();
        }

        public Assignment GetAssignmentById(int id)
        {
            return _context.Assignment.FirstOrDefault(a => a.id == id);
        }

        public void CreateAssignment(Assignment assignment)
        {
            if (assignment == null)
            {
                throw new ArgumentNullException(nameof(assignment));
            }

            _context.Assignment.Add(assignment);
            _context.SaveChanges();
        }

        public void UpdateAssignment(Assignment assignment)
        {
            if (assignment == null)
            {
                throw new ArgumentNullException(nameof(assignment));
            }

            _context.Entry(assignment).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void DeleteAssignment(int id)
        {
            var assignment = _context.Assignment.Find(id);
            if (assignment != null)
            {
                _context.Assignment.Remove(assignment);
                _context.SaveChanges();
            }
        }
    }
}
