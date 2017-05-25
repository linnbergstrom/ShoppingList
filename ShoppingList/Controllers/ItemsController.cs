using ShoppingList.Data;
using System.Collections.Generic;
using System.Web.Http;

namespace ShoppingList.Controllers
{
    public class ItemsController : ApiController
    {
        // GET api/items
        public IEnumerable<Item> Get()
        {
            return ItemsService.GetAll();
        }

        // POST api/items
        //        [Route("api/items/{name}")]
        public IEnumerable<Item> Post([FromBody]Item item)
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
        public void Delete(int id)
        {
        }
    }
}