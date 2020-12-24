 export interface Mappable{
    location:{
        lat:number;
        lng:number;
    }
    markerContent():string
    color:string
}
export class CustomMap{
   private BMap: BMap.Map;
    constructor(divId:string){
      this.BMap = new BMap.Map(divId);
      const point = new BMap.Point(6.404, 3.915); 
      this.BMap.centerAndZoom(point,1); 
    }
    addMarker(mappable: Mappable){
      const point = new BMap.Point(mappable.location.lat, mappable.location.lng)
      const marker = new BMap.Marker(point);
      this.BMap.addOverlay(marker);
      marker.addEventListener('click',()=>{
        let opts = {    
            width : 250,       
            height: 100,       
            title : "标题" ,
        }    
        let infoWindow = new BMap.InfoWindow(mappable.markerContent(), opts);    
        this.BMap.openInfoWindow(infoWindow, point);     
        },false)
    }
   
}
