using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        // Incoming Data Reference
        private readonly DataContext _context;
        public UsersController(DataContext context){
            _context = context;
        }    

        // Returns a Stack of Users.
        // location is {uri:port}/api/users
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
            // var users = _context.Users.ToList();
            return await _context.Users.ToListAsync();
        }

        // Returns a user specified by the end of the query string.
        // location is {uri:port}/api/users/id
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id){
            // var user = _context.Users.Find(id);
            return await _context.Users.FindAsync(id);
        }
    }
}