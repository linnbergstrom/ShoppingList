using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ShoppingList.Data;
using System.Data.Entity;
using ShoppingList.Models;

namespace ShoppingList
{
    public class ItemsService
    {
        // private static ShoppingListEntities db => new ShoppingListEntities();

        internal static ItemsDTO GetAll()
        {
            using (var db = new ShoppingListEntities())
            {
                var needed = db.Items.Where(i => i.Needed).ToList();
                var available = db.Items.Where(i => !i.Needed).ToList();
                var itemDTO = new ItemsDTO
                {
                    Available = available,
                    Needed = needed
                };
                return itemDTO;
            }
        }

        internal static void DeleteItems(IEnumerable<int> ids)
        {
            using (var db = new ShoppingListEntities())
            {
                foreach (var id in ids)
                {
                    var item = db.Items.First(i => i.Id == id);
                    db.Items.Remove(item);
                }
                db.SaveChanges();
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