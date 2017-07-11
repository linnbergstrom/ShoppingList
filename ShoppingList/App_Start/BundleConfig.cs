using System.Web;
using System.Web.Optimization;

namespace ShoppingList
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs").Include(
                      "~/node_modules/angular/angular.js",
                      "~/node_modules/angular-route/angular-route.js",
                      "~/node_modules/angular-animate/angular-animate.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").IncludeDirectory(
                        "~/App", "*.js", true));

            bundles.Add(new StyleBundle("~/ui-fabric").Include(
                        "~/node_modules/office-ui-fabric-core/dist/css/fabric.css",
                        "~/node_modules/font-awesome/css/font-awesome.css"));

            bundles.Add(new StyleBundle("~/Style/css").Include(
                      "~/Style/main.css"));
        }
    }
}