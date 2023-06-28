import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'

const MapContainer = dynamic(
  () => import('react-leaflet').then(module => module.MapContainer),
  {
    ssr: false
  }
)
const Marker = dynamic(
  () => import('react-leaflet').then(module => module.Marker),
  {
    ssr: false
  }
)
const Popup = dynamic(
  () => import('react-leaflet').then(module => module.Popup),
  {
    ssr: false
  }
)
const TitleLayerWithoutSSR = dynamic(
  () => import('react-leaflet').then(module => module.TileLayer),
  {
    ssr: false
  }
)

const Map = () => {
  return (
    <div>
      <div className='container px-5 py-6 mx-auto'>
        <MapContainer
          center={[11.316911704353663, 106.83235128527161]}
          zoom={13}
          scrollWheelZoom={true}
          style={{
            height: '50em',
            width: '100%',
            position: 'relative',
            zIndex: 0
          }}
        >
          <TitleLayerWithoutSSR
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[11.316911704353663, 106.83235128527161]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Map
