function hascollided(lbullet,lwall){
bulletrightedge=bullet.x+bullet.width;
wallrightedge=wall.x
if(bulletrightedge>=wallrightedge){
	return true;
}
else{
return false;
}

}