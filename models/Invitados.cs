using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace proyecto3.models
{
    public class Invitados
    {
        [Key]
        public int id { get; set; }
        public string invitado { get; set; }
    }

  
}
