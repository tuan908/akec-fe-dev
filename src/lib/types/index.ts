import {type SelectQueryBuilder} from "kysely";
import {z} from "zod";

export type ToBoolean<T> = {
  [TKey in keyof T]: boolean;
};

export type PostDto = {
  id: number;
  text: string;
  imgUrl: string;
};

export type LoginData = {
  accessToken: string;
  refreshToken: string;
  username: string;
};

export type Token = Omit<LoginData, "username">;

export type LoginPayload = {
  username: string;
  password: string;
};

export type SuccessResponseDto<T> = {
  data: T;
  success: boolean;
  message: string | null;
  status: number;
};

export type ErrorResponseDto = {
  data: null;
  message: string;
  status: number;
  success: boolean;
};

export type KyselyQueryReturnType<
  KyselyQuery extends SelectQueryBuilder<
    Record<string, unknown>,
    string,
    unknown
  >
> = Awaited<ReturnType<KyselyQuery["execute"]>>[number];

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  images: z.string().array().optional(),
  previewImage: z.string().optional(),
  createdTime: z.date(),
  updatedTime: z.date()
});

const OrderSchema = ProductSchema.pick({
  id: true,
  name: true,
  price: true,
  userId: true
}).merge(z.object({orderId: z.string(), quantity: z.number()}));

export type ProductDto = z.infer<typeof ProductSchema>;
export type OrderDto = z.infer<typeof OrderSchema>;

export type Paged<T> = {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
};
