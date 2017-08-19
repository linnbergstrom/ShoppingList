using ShoppingList.Data;
using ShoppingList.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace ShoppingList.Controllers
{
    public class ItemsController : ApiController
    {
        // GET api/items
        public ItemsDTO Get()
        {
            return ItemsService.GetAll();
        }

        // POST api/items
        //        [Route("api/items/{name}")]
        public ItemsDTO Post([FromBody]Item item)
        {
            ItemsService.addNew(item);
            return ItemsService.GetAll();
        }

        // PUT api/items/5
        public void Put(int id, [FromBody]Item item)
        {
            ItemsService.UpdateItem(item);
        }

        // DELETE api/items/5
        [Route("api/items/delete")]
        public void Post(IEnumerable<int> items)
        {
            ItemsService.DeleteItems(items);
        }
    }
}