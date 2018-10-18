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
  	var phone = factory.newResource(NS, "Phone", "phone0005");
  		phone.brand = "SUNG";
  		phone.model = "450"; 
  	var user = factory.newResource(NS, "User", "USER06");
  		user.userName = "Samuel"; 
  		user.userPhone = "08545032318";
  	var shop = factory.newResource(NS, "Shop", "SHOP06");
  		shop.shopName = "Vivi Mark"; 
  	var invoice = factory.newResource(NS, "Invoice","INV06");
  		invoice.phone = phone;
  		invoice.shop = shop; 
  		invoice.user = user; 
  		invoice.price = 500;
  		invoice.warranty=60;
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
    	})
  		.then( function() {
      		// Generate event
      		var event = getFactory().newEvent(NS, "InvoiceCreated")
  			// Set properties
            event.invoiceId = invoice.invoiceId;
            // Emit
            emit( event );
            });
}

/**
@param { org.secrak.model.saleDocument.CreateSaleDocument} saledocument
@transaction 
*/
function newsaledocument(saledocument){
	
}
