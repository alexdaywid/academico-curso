using System;
using System.Collections.Generic;
using System.Text;

namespace meii.Business.Entities
{
    public class EmailSettings
    {
        public string UserName { get; set; }
        public int Port { get; set; }
        public string Email { get; set; }
        public string Host { get; set; }
        public string Password { get; set; }
        public bool EnableSsl { get; set; }
    }
}
