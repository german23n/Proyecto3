using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using proyecto3.models;

namespace proyecto3.controllers
{
    [Route("api/Invitados")]
    [ApiController]
    public class InvitadosController : ControllerBase
    {
        private readonly ApplicationDbcontext _context;

        public InvitadosController(ApplicationDbcontext context)
        {
            _context = context;
        }

        // GET: api/Invitados
        [HttpGet]
        public IEnumerable<Invitados> Getinvitados()
        {

            return new List<Invitados>()
            {

                new Invitados(){id=1,invitado =  "German alexis" },
                new Invitados(){id=2,invitado =  "Bairon Alvarez" }





            };

          //  return _context.invitado;
        }


           

        // GET: api/Invitados/5  
        [HttpGet("{id}")]
        public async Task<IActionResult> GetInvitado([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            { 
                return BadRequest(ModelState);
            }

            var invitados = await _context.invitado.FindAsync(id);
             
            if (invitados == null) 
            {
                return NotFound();
            }

            return Ok(invitados);
        }

        // PUT: api/Invitados/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvitados([FromRoute] int id, [FromBody] Invitados invitados)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != invitados.id)
            {
                return BadRequest();
            }

            _context.Entry(invitados).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InvitadosExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Invitados
        [HttpPost]
        public async Task<IActionResult> PostInvitados([FromBody] Invitados invitados)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.invitado.Add(invitados);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInvitados", new { id = invitados.id }, invitados);
        }

        // DELETE: api/Invitados/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvitados([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var invitados = await _context.invitado.FindAsync(id);
            if (invitados == null)
            {
                return NotFound();
            }

            _context.invitado.Remove(invitados);
            await _context.SaveChangesAsync();

            return Ok(invitados);
        }

        private bool InvitadosExists(int id)
        {
            return _context.invitado.Any(e => e.id == id);
        }
    }
}