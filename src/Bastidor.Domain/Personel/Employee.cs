using Bastidor.Domain.Core.Models;
using Bastidor.Domain.Sales;
using System.Collections;
using System.Collections.Generic;

namespace Bastidor.Domain.Personel
{
    public class Employee : Entity<Employee>
    {
        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public string Identification { get; private set; }

        //EF Navigation
        public virtual ICollection<Sale> Sales { get; private set; }
    }
}
