using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace BilgeAriMVC.Filters
{
    public class AuthorizeSessionAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var userId = context.HttpContext.Session.GetString("UserId");
            
            if (string.IsNullOrEmpty(userId))
            {
                // Eğer giriş yapılmamışsa Login sayfasına yönlendir
                context.Result = new RedirectToActionResult("Login", "Auth", null);
            }
            
            base.OnActionExecuting(context);
        }
    }
}
