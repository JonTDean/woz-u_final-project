using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        // Incoming Data Reference
        private readonly DataContext _context;
        public UsersController(DataContext context){
            _context = context;
        }    

        // Returns a Stack of Users.
        // location is {uri:port}/api/users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
            // var users = _context.Users.ToList();
            return await _context.Users.ToListAsync();
        }

        // Returns a user specified by the end of the query string.
        // location is {uri:port}/api/users/id
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id){
            // var user = _context.Users.Find(id);
            return await _context.Users.FindAsync(id);
        }
    }
}