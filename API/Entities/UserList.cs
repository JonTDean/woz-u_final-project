using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class UserList
    {
        public int Id { get; set;}
        public string Name { get; set; }
        public string Description { get; set; }
        public string Tags { get; set; }
        [ForeignKey("Id")]
        public int AppUserID { get; set; }
    }
}