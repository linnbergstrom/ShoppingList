using ShoppingList.Data;
using System.Collections.Generic;

namespace ShoppingList.Models
{
    public class ItemsDTO
    {
        public IEnumerable<Item> Available { get; set; }

        public IEnumerable<Item> Needed { get; set; }
    }
}