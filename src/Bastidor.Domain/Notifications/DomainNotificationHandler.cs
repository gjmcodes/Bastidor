using System.Collections.Generic;
using System.Linq;

namespace Bastidor.Domain.Notifications
{

    public interface IDomainNotificationHandler
    {
        bool HasNotifications();
        IEnumerable<DomainNotification> GetNotifications();
    }

    public class DomainNotificationHandler : IDomainNotificationHandler
    {
        private IEnumerable<DomainNotification> _notifications;

        public DomainNotificationHandler()
        {
            _notifications = new List<DomainNotification>();
        }


        public IEnumerable<DomainNotification> GetNotifications()
        {
            return _notifications;
        }

        public bool HasNotifications()
        {
            return _notifications.Any();
        }
    }
}
