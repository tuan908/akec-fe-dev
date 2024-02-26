export const REQUEST_PARAM_SORT_ASC = "asc";
export const REQUEST_PARAM_SORT_DESC = "desc";
export const REQUEST_PARAM_PAGE = "page";
export const REQUEST_PARAM_SIZE = "size";
export const REQUEST_PARAM_SORT = "sort";

export const LOGO_ABSOLUTE_PATH = "/assets/image/logo.jpg";

export enum Route {
  Home = "/home",
  Products = "/products/list",
  Contact = "/contact",
  Cart = "/cart",
  Introduce = "/home",
  Login = "/auth/login",
  Post = "/post",
  Account = "/account",
  CustomerService = "/customer-service"
}

export const ACCESS_TOKEN = `access_token`;
export const REFRESH_TOKEN = `refresh_token`;
export const USER_INFO = `user_info`;

export enum LoggerNamespace {
  Trace = "TRACE",
  Debug = "DEBUG",
  Info = "INFO",
  Warn = "WARN",
  Error = "ERROR",
  Fatal = "FATAL"
}

export enum HttpStatus {
  // 1xx Informational
  Continue = 100,
  SwitchProtocols = 101,
  Processing = 102,
  EarlyHints = 103,
  // 2xx Success
  OK = 200,
  Created = 201,
  Accepted = 202,
  NotAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  ImUsed = 226,
  // 3xx Redirection
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,
  // --- 4xx Client Error ---
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  PayloadTooLarge = 413,
  UriTooLong = 414,
  UnsupportedMediaType = 415,
  RequestRangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  IAmATeaPot = 418,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  TooEarly = 425,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequest = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableFroLegalReasons = 451,
  // --- 5xx Server Error ---
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HttpVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  BandwidthLimitExceeded = 509,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511
}

export enum HttpMethod {
  GET = `GET`,
  HEAD = `HEAD`,
  POST = `POST`,
  PUT = `PUT`,
  PATCH = `PATCH`,
  DELETE = `DELETE`,
  OPTIONS = `OPTIONS`,
  TRACE = `TRACE`
}

export enum SliceName {
  Auth = `auth`,
  Carousel = `carousel`,
  Order = `order`,
  Post = `post`
}
