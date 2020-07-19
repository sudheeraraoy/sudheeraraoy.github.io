'use strict';


	angular.module('ShoppingListCheckOff',[])
	
	.controller('ToBuyShoppingController',ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
	
	
	
	ToBuyShoppingController.$inject=['ShoppingListCheckOffService'];

	function ToBuyShoppingController(ShoppingListCheckOffService)
	{
		var toBuyList=this;
		
		toBuyList.toBuyItemList=ShoppingListCheckOffService.getItems();
		
		
		
		toBuyList.addToBoughtList=function(itemIndex,itemcount,itemname)
		{
			

			ShoppingListCheckOffService.addToBoughtList(itemIndex,itemcount,itemname);
		};
		
	}

	AlreadyBoughtShoppingController.$inject=['ShoppingListCheckOffService'];

	function AlreadyBoughtShoppingController(ShoppingListCheckOffService)
	{
		var boughtlist=this;
		
		
		boughtlist.boughtlist=ShoppingListCheckOffService.buylist();
		
		
		boughtlist.AddItem=function(itemIndex)
		{
			
			ShoppingListCheckOffService.AddItem(itemIndex);
		};
		
	}



	function ShoppingListCheckOffService()
	{
		var service=this;
		var toBuyItemList=[{name:"Milk",quantity:"200"},{name:"Biscuits",quantity:"5"},{name:"Apple",quantity:"12"},{name:"Soap",quantity:"5"},{name:"NoteBook",quantity:"15"}];
		
		var boughtlist=[];		
		service.getItems=function()
				 {   
				    return toBuyItemList;
				 };
		service.buylist=function()
				 {   
					return boughtlist;
				 };
		service.addToBoughtList=function(itemIndex,itemcount,itemname)
				 { 
					
					console.log("itemname value:",itemIndex);
					console.log("itemname value:",itemcount);
					console.log("itemname value:",itemname);
					 
					
					
					toBuyItemList.splice(itemIndex,1);
					boughtlist.push({name:itemname,quantity:itemcount});
					
					
				 };		
				 service.AddItem=function(itemIndex)
				 { 
					boughtlist.push({name:"a",quantity:"10"}); 
					
					 boughtlist.push(itemIndex);
					
					
					
				 };				 
				 

	}

	