using meii.Business.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;

using System.Text;
using System.Threading.Tasks;
using meii.Business.Entities;

namespace meii.Business.Services
{
    public class MailService : IMailServices
    {

        private readonly EmailSettings _emailSettings;


        public MailService(IOptions<EmailSettings> emailSettings
            )
        {
            _emailSettings = emailSettings.Value;

        }

        public Task SendEmailAsync(string email, string assunto, string mensagem)
        {
            throw new NotImplementedException();
        }

        //public async Task SendEmailAsync(string email, string subject, string message)
        //{
        //    try
        //    {
        //        var mimeMessage = new MimeMessage();

        //        mimeMessage.From.Add(new MailboxAddress(_emailSettings.UserName, _emailSettings.Email));

        //        mimeMessage.To.Add(new MailboxAddress(email));

        //        mimeMessage.Subject = subject;


        //        mimeMessage.Body = new TextPart("html")
        //        {

        //            Text = message
        //        };

        //        using (var client = new SmtpClient())
        //        {
        //            // For demo-purposes, accept all SSL certificates (in case the server supports STARTTLS)
        //            //client.ClientCertificates = (s, c, h, e) => true;


        //            if (_env.IsDevelopment())
        //            {
        //                // The third parameter is useSSL (true if the client should make an SSL-wrapped
        //                // connection to the server; otherwise, false).
        //                await client.ConnectAsync(_emailSettings.Host, _emailSettings.Port, _emailSettings.EnableSsl);

        //            }
        //            else
        //            {
        //                await client.ConnectAsync(_emailSettings.Host);
        //            }

        //            // Note: only needed if the SMTP server requires authentication
        //            await client.AuthenticateAsync(_emailSettings.Email, _emailSettings.Password);

        //            await client.SendAsync(mimeMessage);

        //            await client.DisconnectAsync(true);
        //        }

        //    }
        //    catch (Exception ex)
        //    {
        //        // TODO: handle exception
        //        throw new InvalidOperationException(ex.Message);
        //    }
        //}

        //}
        }
    }

