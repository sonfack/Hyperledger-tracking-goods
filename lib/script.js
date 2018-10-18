/**
@param { org.secrak.model.invoice.CreateShop} shop
@transaction 
*/
function newShop(shop){
	var factory = getFactory(); 
  	var NS = "org.secrak.model.invoice";
  	var shop = factory.newResource(NS, "Shop", "SHOP01");
  		shop.shopName = "Big C"; 
  	return getParticipantRegistry(NS + '.Shop')
  			.then(function(participantRegistry){
    			return participantRegistry.addAll([shop])
    	});
}

/**
@param { org.secrak.model.invoice.CreateUser} user
@transaction 
*/
function newUser(user){
	var factory = getFactory(); 
  	var NS = "org.secrak.model.invoice";
  	var user = factory.newResource(NS, "User", "USER01");
  		user.userName = "Sonfack serge"; 
  		user.userPhone = "08686060318";
  	return getParticipantRegistry(NS + '.User')
  			.then(function(participantRegistry){
    			return participantRegistry.addAll([user])
    	});
}

/**
@param { org.secrak.model.invoice.CreateInvoice} invoice
@transaction 
*/
function newinvoice(invoice){
	var factory = getFactory(); 
  	var NS = "org.secrak.model.invoice";
  	var phone = factory.newResource(NS, "Phone", "phone0001");
  		phone.brand = "SAMSUNG";
  		phone.model = "310"; 
  	var user = factory.newResource(NS, "User", "USER02");
  		user.userName = "Daouda"; 
  		user.userPhone = "08566032318";
  	var shop = factory.newResource(NS, "Shop", "SHOP02");
  		shop.shopName = "Pico"; 
  	var invoice = factory.newResource(NS, "Invoice","INV02");
  		invoice.phone = phone;
  		invoice.shop = shop; 
  		invoice.user = user; 
  		invoice.price = 200;
  		invoice.warranty=30;
  		invoice.issuedDate = new Date(); 
  	return getParticipantRegistry(NS + '.User')
  		.then(function(participantRegistry){
    			return participantRegistry.addAll([user])
    	})
  		.then(function(){
    			return getAssetRegistry(NS + '.Phone')
    	})
  		.then(function(assetRegistry){
    			return assetRegistry.addAll([phone])
    	})
  		.then(function(){
    		return getAssetRegistry(NS + '.Invoice')
    	})
      	.then(function(assetRegistry){
    			return assetRegistry.addAll([invoice])
    	});
}

/**
@param { org.secrak.model.saleDocument.CreateSaleDocument} saledocument
@transaction 
*/
function newsaledocument(saledocument){
	
}
