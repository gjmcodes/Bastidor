using System.Collections.Generic;
using System.Linq;

namespace Bastidor.Domain.Core.Models
{
    public struct OperationResult
    {
        public OperationResult(IDictionary<string, string> validations, object returnData)
        {
            Validations = validations;
            ReturnData = returnData;
        }

        public IDictionary<string, string> Validations { get; }
        public object ReturnData { get; }

        public bool IsValid => Validations == null || !Validations.Any();
    }
}