using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;


namespace API.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [Authorize]
        //api/users/3
        [HttpGet("{id}")]
        public async  Task<ActionResult<AppUser>> GetUSerById(int id)
        {
            return await _context.Users.FindAsync(id);
        }
    }
}