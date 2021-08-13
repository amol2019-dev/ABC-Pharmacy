using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ABC_Pharmacy.Models
{
    public class Medicines
    {
        public int? Id { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public string Brand { get; set; }

        [Required]
        public decimal Price { get; set; }
        public int Quantity { get; set; }

        [Required]
        public DateTime ExpiryDate { get; set; }
        public string Notes { get; set; }
    }
}
