let factura=[];
let valorALProducto;
let iteracion;
let TotalPagoProducto;
let totalPago =[];

factura=[
    {codigo:1, nombreProducto: 'malteada', cantidad: 3, valorUnidad: 12000},
    {codigo:2, nombreProducto: 'picada', cantidad: 3, valorUnidad: 25000},
    {codigo:3, nombreProducto: 'hamburguesa mixta', cantidad: 4, valorUnidad: 14000},
    {codigo:4, nombreProducto: 'churrasco', cantidad: 1, valorUnidad: 25000},
    {codigo:5, nombreProducto: 'gaseosa', cantidad: 5, valorUnidad: 5000},
    {codigo:6, nombreProducto: 'limonada', cantidad: 5, valorUnidad: 6000},
];
valorALProducto = factura[3].cantidad *factura[3].valorUnidad;
console.log("Total a pagar: " +valorALProducto);
console.log(factura[3].nombreProducto);

for(iteracion=0; iteracion < factura.length; iteracion++){
    TotalPagoProducto = factura[iteracion].cantidad *factura[iteracion].valorUnidad;
    totalPago.push({nombre: factura[iteracion].nombreProducto, cantidad: factura[iteracion], precio: factura[iteracion].valorUnidad, total: TotalPagoProducto})
}
console.log(totalPago)