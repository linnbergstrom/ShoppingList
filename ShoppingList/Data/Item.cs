//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ShoppingList.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Item
    {
        public int Id { get; set; }
        public int Index { get; set; }
        public bool Needed { get; set; }
        public Nullable<System.DateTime> LastUpdated { get; set; }
        public string Title { get; set; }
        public int Frequency { get; set; }
    }
}
