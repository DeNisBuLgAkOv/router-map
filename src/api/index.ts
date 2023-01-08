export const getWaypoints = async (coordinates: string) => {
    const uri = `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=polyline6`
    const request = await fetch (uri);
    return await request.json();
}