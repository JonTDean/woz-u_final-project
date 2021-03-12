using System.ComponentModel.DataAnnotations;

namespace API.DataTransferObjects
{
    public class LoginDTO
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}