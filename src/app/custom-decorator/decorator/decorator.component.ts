export function AutoUnsubscribe( constructor: any ) {

  const original = constructor.prototype.ngOnDestroy; //save the original ngOnDestroy

  constructor.prototype.ngOnDestroy = function () { //creates a new one
    for ( let prop in this ) {
      const property = this[ prop ];
      if ( property && (typeof property.unsubscribe === "function") ) {
        property.unsubscribe();
      }
    }
    original && typeof original === "function" && original.apply(this, arguments);
  };
//when the class is being destroyed the new hook is called
}
