"use client";

import {useAdvancedScroll} from "@/hooks";
import {useGetImageListQuery} from "@/lib/redux/post/post.api";
import Image from "next/image";

const Page = () => {
  const {data} = useGetImageListQuery();
  const {sourceRef, targetRef} = useAdvancedScroll();

  return (
    <div className="w-full h-full min-h-screen grid place-items-center">
      <div className="w-4/5 m-auto h-[600px] grid grid-cols-2">
        <div className="overflow-y-hidden" ref={targetRef}>
          {data?.map(({id, url}) => (
            <Image
              key={id}
              src={url}
              alt=""
              width={600}
              height={600}
              className="m-auto"
            />
          ))}
        </div>
        <div className="overflow-y-auto styledScrollbar" ref={sourceRef}>
          <h1 className="text-2xl">Big data, Personal Food</h1>
          <p className="my-4 w-9/10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            iste voluptatum eaque velit quod vero illo deserunt sit provident
            corrupti. Officiis, animi. Ipsum animi quas perferendis amet beatae!
            Tempora, soluta. Voluptatibus sit quod ratione illum, explicabo
            molestias asperiores at minus exercitationem consequatur aperiam.
            Culpa, ad numquam commodi rerum dolorum eos in cum, nemo praesentium
            tempore quod sit voluptatem sed natus! Accusantium numquam deserunt
            quibusdam, ipsa libero dolorum recusandae consequatur nostrum
            adipisci qui molestias tempora impedit voluptates commodi hic.
            Voluptatem natus veritatis id qui quisquam aut ullam temporibus
            maiores a nam tenetur, blanditiis sint eum modi inventore adipisci
            laborum praesentium! Facere reprehenderit velit est unde temporibus,
            fuga soluta a. Suscipit perspiciatis eligendi reprehenderit tempore,
            possimus necessitatibus dolor eum, reiciendis accusantium eveniet
            nobis fuga, non minus eos rem. Nulla saepe, quisquam iusto
            voluptates expedita optio molestias veniam perspiciatis repudiandae
            dolor.
          </p>
          <p className="my-4">
            Quam dolore illo eligendi temporibus, repudiandae aperiam ex
            laboriosam minima. Enim, delectus. Adipisci tempore at odio veniam
            quaerat consequatur natus dignissimos aut neque. Laudantium, fugit
            reprehenderit. Libero, asperiores maxime? Est asperiores illum
            velit? Doloribus maxime odit quidem ipsa libero sapiente excepturi
            molestiae maiores iste, nisi, nulla esse recusandae voluptas,
            repudiandae neque illo adipisci. Tenetur quia ipsam, sint totam
            quidem repudiandae eos, ipsa itaque laudantium explicabo molestias
            dolorum. Quam, sint rerum veniam quaerat assumenda odio eos, ducimus
            illo delectus explicabo repudiandae quis deleniti sunt.
          </p>
          <p>
            Sit maiores enim iste aperiam voluptatum nihil vitae repudiandae
            repellendus. Officia quaerat sint minus quam nihil consequatur at,
            libero deleniti id assumenda. Animi soluta repellat nostrum, porro
            incidunt voluptatibus vero? Dolores illo incidunt, aspernatur harum
            autem similique reprehenderit dignissimos quas excepturi nemo
            voluptate ab quo delectus cumque provident expedita dolor sit non
            quidem aut ea, in labore. Voluptas, vero eveniet!
          </p>

          <p>
            Voluptas, doloremque. Fugit consectetur perspiciatis repellat,
            quisquam, eum non magnam fuga mollitia accusantium ratione quibusdam
            reiciendis, sed deserunt ex possimus quidem dolorum dolore! Pariatur
            nihil, dolorum eius impedit laborum totam repellat animi. Ullam
            doloribus libero laborum exercitationem animi nulla fuga dolorem
            impedit quis rerum rem itaque, sit expedita dolorum! Laborum odit
            quo repellat eum quisquam dignissimos. Alias libero earum adipisci
            omnis molestias. Placeat molestias expedita tempora accusamus
            aliquam neque cum fugiat magnam ducimus, fugit aliquid temporibus
            libero, repellendus eligendi.
          </p>

          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            optio doloremque beatae consequatur veniam omnis amet vitae, sint
            totam corrupti dolore, inventore consequuntur ipsam minima adipisci
            nemo a vel placeat? Ab labore tempora nisi! Sequi, optio. Quo
            blanditiis deserunt debitis ratione earum magni quae suscipit
            laborum ipsa, tempore beatae assumenda obcaecati vitae sed modi
            voluptate asperiores quidem. Necessitatibus, nam impedit? Aperiam
            accusantium pariatur in itaque fugit amet ex libero repellendus.
            Voluptatibus iste adipisci repellat harum exercitationem temporibus,
            excepturi velit totam suscipit deserunt esse tenetur libero quisquam
            placeat dolore doloribus nam. Cupiditate perspiciatis quasi dolore
            hic iste veritatis cumque quam explicabo fugit laboriosam omnis
            aliquid totam, quis ipsa esse maxime enim laborum corrupti at animi
            molestiae! Pariatur quibusdam minima asperiores repellat. Natus
            magnam fugiat id consectetur, debitis maiores totam maxime eius quos
            consequatur enim aliquid sequi dignissimos, nisi reprehenderit
            doloremque obcaecati blanditiis. Enim necessitatibus a eligendi et,
            harum ipsa saepe repellendus.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            optio doloremque beatae consequatur veniam omnis amet vitae, sint
            totam corrupti dolore, inventore consequuntur ipsam minima adipisci
            nemo a vel placeat? Ab labore tempora nisi! Sequi, optio. Quo
            blanditiis deserunt debitis ratione earum magni quae suscipit
            laborum ipsa, tempore beatae assumenda obcaecati vitae sed modi
            voluptate asperiores quidem. Necessitatibus, nam impedit? Aperiam
            accusantium pariatur in itaque fugit amet ex libero repellendus.
            Voluptatibus iste adipisci repellat harum exercitationem temporibus,
            excepturi velit totam suscipit deserunt esse tenetur libero quisquam
            placeat dolore doloribus nam. Cupiditate perspiciatis quasi dolore
            hic iste veritatis cumque quam explicabo fugit laboriosam omnis
            aliquid totam, quis ipsa esse maxime enim laborum corrupti at animi
            molestiae! Pariatur quibusdam minima asperiores repellat. Natus
            magnam fugiat id consectetur, debitis maiores totam maxime eius quos
            consequatur enim aliquid sequi dignissimos, nisi reprehenderit
            doloremque obcaecati blanditiis. Enim necessitatibus a eligendi et,
            harum ipsa saepe repellendus.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            optio doloremque beatae consequatur veniam omnis amet vitae, sint
            totam corrupti dolore, inventore consequuntur ipsam minima adipisci
            nemo a vel placeat? Ab labore tempora nisi! Sequi, optio. Quo
            blanditiis deserunt debitis ratione earum magni quae suscipit
            laborum ipsa, tempore beatae assumenda obcaecati vitae sed modi
            voluptate asperiores quidem. Necessitatibus, nam impedit? Aperiam
            accusantium pariatur in itaque fugit amet ex libero repellendus.
            Voluptatibus iste adipisci repellat harum exercitationem temporibus,
            excepturi velit totam suscipit deserunt esse tenetur libero quisquam
            placeat dolore doloribus nam. Cupiditate perspiciatis quasi dolore
            hic iste veritatis cumque quam explicabo fugit laboriosam omnis
            aliquid totam, quis ipsa esse maxime enim laborum corrupti at animi
            molestiae! Pariatur quibusdam minima asperiores repellat. Natus
            magnam fugiat id consectetur, debitis maiores totam maxime eius quos
            consequatur enim aliquid sequi dignissimos, nisi reprehenderit
            doloremque obcaecati blanditiis. Enim necessitatibus a eligendi et,
            harum ipsa saepe repellendus.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            optio doloremque beatae consequatur veniam omnis amet vitae, sint
            totam corrupti dolore, inventore consequuntur ipsam minima adipisci
            nemo a vel placeat? Ab labore tempora nisi! Sequi, optio. Quo
            blanditiis deserunt debitis ratione earum magni quae suscipit
            laborum ipsa, tempore beatae assumenda obcaecati vitae sed modi
            voluptate asperiores quidem. Necessitatibus, nam impedit? Aperiam
            accusantium pariatur in itaque fugit amet ex libero repellendus.
            Voluptatibus iste adipisci repellat harum exercitationem temporibus,
            excepturi velit totam suscipit deserunt esse tenetur libero quisquam
            placeat dolore doloribus nam. Cupiditate perspiciatis quasi dolore
            hic iste veritatis cumque quam explicabo fugit laboriosam omnis
            aliquid totam, quis ipsa esse maxime enim laborum corrupti at animi
            molestiae! Pariatur quibusdam minima asperiores repellat. Natus
            magnam fugiat id consectetur, debitis maiores totam maxime eius quos
            consequatur enim aliquid sequi dignissimos, nisi reprehenderit
            doloremque obcaecati blanditiis. Enim necessitatibus a eligendi et,
            harum ipsa saepe repellendus.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            optio doloremque beatae consequatur veniam omnis amet vitae, sint
            totam corrupti dolore, inventore consequuntur ipsam minima adipisci
            nemo a vel placeat? Ab labore tempora nisi! Sequi, optio. Quo
            blanditiis deserunt debitis ratione earum magni quae suscipit
            laborum ipsa, tempore beatae assumenda obcaecati vitae sed modi
            voluptate asperiores quidem. Necessitatibus, nam impedit? Aperiam
            accusantium pariatur in itaque fugit amet ex libero repellendus.
            Voluptatibus iste adipisci repellat harum exercitationem temporibus,
            excepturi velit totam suscipit deserunt esse tenetur libero quisquam
            placeat dolore doloribus nam. Cupiditate perspiciatis quasi dolore
            hic iste veritatis cumque quam explicabo fugit laboriosam omnis
            aliquid totam, quis ipsa esse maxime enim laborum corrupti at animi
            molestiae! Pariatur quibusdam minima asperiores repellat. Natus
            magnam fugiat id consectetur, debitis maiores totam maxime eius quos
            consequatur enim aliquid sequi dignissimos, nisi reprehenderit
            doloremque obcaecati blanditiis. Enim necessitatibus a eligendi et,
            harum ipsa saepe repellendus.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            optio doloremque beatae consequatur veniam omnis amet vitae, sint
            totam corrupti dolore, inventore consequuntur ipsam minima adipisci
            nemo a vel placeat? Ab labore tempora nisi! Sequi, optio. Quo
            blanditiis deserunt debitis ratione earum magni quae suscipit
            laborum ipsa, tempore beatae assumenda obcaecati vitae sed modi
            voluptate asperiores quidem. Necessitatibus, nam impedit? Aperiam
            accusantium pariatur in itaque fugit amet ex libero repellendus.
            Voluptatibus iste adipisci repellat harum exercitationem temporibus,
            excepturi velit totam suscipit deserunt esse tenetur libero quisquam
            placeat dolore doloribus nam. Cupiditate perspiciatis quasi dolore
            hic iste veritatis cumque quam explicabo fugit laboriosam omnis
            aliquid totam, quis ipsa esse maxime enim laborum corrupti at animi
            molestiae! Pariatur quibusdam minima asperiores repellat. Natus
            magnam fugiat id consectetur, debitis maiores totam maxime eius quos
            consequatur enim aliquid sequi dignissimos, nisi reprehenderit
            doloremque obcaecati blanditiis. Enim necessitatibus a eligendi et,
            harum ipsa saepe repellendus.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            optio doloremque beatae consequatur veniam omnis amet vitae, sint
            totam corrupti dolore, inventore consequuntur ipsam minima adipisci
            nemo a vel placeat? Ab labore tempora nisi! Sequi, optio. Quo
            blanditiis deserunt debitis ratione earum magni quae suscipit
            laborum ipsa, tempore beatae assumenda obcaecati vitae sed modi
            voluptate asperiores quidem. Necessitatibus, nam impedit? Aperiam
            accusantium pariatur in itaque fugit amet ex libero repellendus.
            Voluptatibus iste adipisci repellat harum exercitationem temporibus,
            excepturi velit totam suscipit deserunt esse tenetur libero quisquam
            placeat dolore doloribus nam. Cupiditate perspiciatis quasi dolore
            hic iste veritatis cumque quam explicabo fugit laboriosam omnis
            aliquid totam, quis ipsa esse maxime enim laborum corrupti at animi
            molestiae! Pariatur quibusdam minima asperiores repellat. Natus
            magnam fugiat id consectetur, debitis maiores totam maxime eius quos
            consequatur enim aliquid sequi dignissimos, nisi reprehenderit
            doloremque obcaecati blanditiis. Enim necessitatibus a eligendi et,
            harum ipsa saepe repellendus.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            optio doloremque beatae consequatur veniam omnis amet vitae, sint
            totam corrupti dolore, inventore consequuntur ipsam minima adipisci
            nemo a vel placeat? Ab labore tempora nisi! Sequi, optio. Quo
            blanditiis deserunt debitis ratione earum magni quae suscipit
            laborum ipsa, tempore beatae assumenda obcaecati vitae sed modi
            voluptate asperiores quidem. Necessitatibus, nam impedit? Aperiam
            accusantium pariatur in itaque fugit amet ex libero repellendus.
            Voluptatibus iste adipisci repellat harum exercitationem temporibus,
            excepturi velit totam suscipit deserunt esse tenetur libero quisquam
            placeat dolore doloribus nam. Cupiditate perspiciatis quasi dolore
            hic iste veritatis cumque quam explicabo fugit laboriosam omnis
            aliquid totam, quis ipsa esse maxime enim laborum corrupti at animi
            molestiae! Pariatur quibusdam minima asperiores repellat. Natus
            magnam fugiat id consectetur, debitis maiores totam maxime eius quos
            consequatur enim aliquid sequi dignissimos, nisi reprehenderit
            doloremque obcaecati blanditiis. Enim necessitatibus a eligendi et,
            harum ipsa saepe repellendus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
