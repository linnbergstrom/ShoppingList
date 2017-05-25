using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ShoppingList.Data;
using System.Data.Entity;

namespace ShoppingList
{
    public class ItemsService
    {
        // private static ShoppingListEntities db => new ShoppingListEntities();

        internal static IEnumerable<Item> GetAll()
        {
            using (var db = new ShoppingListEntities())
            {
                return db.Items.ToList();
            }
        }

        internal static void UpdateItem(Item item)
        {

            using (var db = new ShoppingListEntities())
            {
                db.Entry(item).State = EntityState.Modified;
                db.SaveChanges();
            }
        }

        internal static void addNew(Item item)
        {
            using (var db = new ShoppingListEntities())
            {
                item.Index = db.Items.Count() + 1;
                item.Needed = true;
                item.LastUpdated = DateTime.Now;
                item.Frequency = 0;

                db.Items.Add(item);
                db.SaveChanges();
            }
        }
    }
}