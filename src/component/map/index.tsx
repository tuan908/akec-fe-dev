import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { LoadingComponent } from '..'

const Map = () => {
  const MapContainerWithoutSSR = useMemo(
    () =>
      dynamic(
        () => import('react-leaflet').then(module => module.MapContainer),
        {
          ssr: false,
          loading: () => <LoadingComponent />
        }
      ),
    []
  )

  const MarkerWithoutSSR = useMemo(
    () =>
      dynamic(() => import('react-leaflet').then(module => module.Marker), {
        ssr: false,
        loading: () => <LoadingComponent />
      }),
    []
  )

  const PopupWithoutSSR = useMemo(
    () =>
      dynamic(() => import('react-leaflet').then(module => module.Popup), {
        ssr: false,
        loading: () => <LoadingComponent />
      }),
    []
  )

  const TitleLayerWithoutSSR = useMemo(
    () =>
      dynamic(() => import('react-leaflet').then(module => module.TileLayer), {
        ssr: false,
        loading: () => <LoadingComponent />
      }),
    []
  )

  return (
    <div>
      <div className='container px-5 py-6 mx-auto'>
        <MapContainerWithoutSSR
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
          <MarkerWithoutSSR position={[11.316911704353663, 106.83235128527161]}>
            <PopupWithoutSSR>
              A pretty CSS3 popup. <br /> Easily customizable.
            </PopupWithoutSSR>
          </MarkerWithoutSSR>
        </MapContainerWithoutSSR>
      </div>
    </div>
  )
}

export default Map
