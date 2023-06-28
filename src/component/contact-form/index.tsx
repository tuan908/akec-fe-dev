import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from '@mui/material';
import styles from './contact-form.module.scss';

interface ContactFormProps {}

const ContactForm = () => {
    const facebook_url = 'https://www.facebook.com/AKECsince2021'
    return (
        <div className={styles.ContactForm}>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-col text-start w-full pt-4">
            <h1 className="sm:text-3xl text-2xl font-medium mb-4 title-font text-gray-900">
                Liên Lạc Với AKEC
            </h1>

            <div className='grid grid-cols-10' >
                <div className='col-span-2'>
                    <h4>Địa chỉ</h4>
                </div>
                <div className='col-span-7'>
                    <p>An Bình, Phú Giáo, Bình Dương</p>
                </div>

                <div className='col-span-2'>
                    <h4>Điện thoại</h4>
                </div>
                <div className='col-span-7'>
                    <p>+84 37 223 8379</p>
                </div>

                <div className='col-span-2'>
                    <h4>Email</h4>
                </div>
                <div className='col-span-7'>
                    <p>info@akec.com</p>
                </div>

                <div className='col-span-2'>
                    {/* <h4>Facebook</h4> */}
                </div>
                <div className='col-span-7'>
                    <Link href={facebook_url}>
                        <FacebookIcon className={styles.socialIcon}></FacebookIcon>
                    </Link>
                </div>
            </div>
          </div>

          <div className="flex flex-col text-start w-full mt-[1em] pt-[1em] border-t border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-medium mb-4 title-font text-gray-900 capitalize">
                Gửi thắc mắc cho AKEC
            </h1>
          </div>
          <div className="mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nội Dung Tin Nhắn
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      )
};

export default ContactForm;
