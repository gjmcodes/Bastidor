using System.Collections.Generic;
using System.Linq;

namespace Bastidor.Application.ViewModels.Application
{
    public class OperationResult
    {

        public OperationResult(IDictionary<string, string> validations)
        {
            this.Validations = validations;
        }

        public IDictionary<string, string> Validations { get; set; }
        public bool IsValid => Validations == null || !Validations.Any();
    }
}
