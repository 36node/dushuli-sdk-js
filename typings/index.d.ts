export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  wechat: SDK.WechatAPI;
  member: SDK.MemberAPI;
  product: SDK.ProductAPI;
  order: SDK.OrderAPI;
  setting: SDK.SettingAPI;
  stats: SDK.StatsAPI;
  invitation: SDK.InvitationAPI;
  formId: SDK.FormIdAPI;
  reply: SDK.ReplyAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface WechatAPI {
    /**
     * initiate a payment process
     */
    createPayment(req: CreatePaymentRequest): Promise<CreatePaymentResponse>;
    /**
     * get wechat js sdk signature
     */
    getSignature(req: GetSignatureRequest): Promise<GetSignatureResponse>;
    /**
     * get wechat message security check
     */
    getMsgSecCheck(req: GetMsgSecCheckRequest): Promise<GetMsgSecCheckResponse>;
  }
  export interface MemberAPI {
    /**
     * list all members
     */
    listMembers(req: ListMembersRequest): Promise<ListMembersResponse>;
    /**
     * create a member
     */
    createMember(req: CreateMemberRequest): Promise<CreateMemberResponse>;
    /**
     * get member by user
     */
    getMember(req: GetMemberRequest): Promise<GetMemberResponse>;
    /**
     * delete a member
     */
    deleteMember(req: DeleteMemberRequest): Promise<DeleteMemberResponse>;
    /**
     * update a member
     */
    updateMember(req: UpdateMemberRequest): Promise<UpdateMemberResponse>;
  }
  export interface ProductAPI {
    /**
     * list all products
     */
    listProducts(req: ListProductsRequest): Promise<ListProductsResponse>;
    /**
     * create a product
     */
    createProduct(req: CreateProductRequest): Promise<CreateProductResponse>;
    /**
     * get product by productId
     */
    getProduct(req: GetProductRequest): Promise<GetProductResponse>;
    /**
     * delete a product
     */
    deleteProduct(req: DeleteProductRequest): Promise<DeleteProductResponse>;
    /**
     * update product
     */
    updateProduct(req: UpdateProductRequest): Promise<UpdateProductResponse>;
  }
  export interface OrderAPI {
    /**
     * list all orders
     */
    listOrders(req: ListOrdersRequest): Promise<ListOrdersResponse>;
    /**
     * create a order
     */
    createOrder(req: CreateOrderRequest): Promise<CreateOrderResponse>;
    /**
     * get order by orderId
     */
    getOrder(req: GetOrderRequest): Promise<GetOrderResponse>;
    /**
     * delete a order
     */
    deleteOrder(req: DeleteOrderRequest): Promise<DeleteOrderResponse>;
    /**
     * update order
     */
    updateOrder(req: UpdateOrderRequest): Promise<UpdateOrderResponse>;
  }
  export interface SettingAPI {
    /**
     * get setting by user
     */
    getSetting(req: GetSettingRequest): Promise<GetSettingResponse>;
    /**
     * delete a setting
     */
    deleteSetting(req: DeleteSettingRequest): Promise<DeleteSettingResponse>;
    /**
     * update a setting
     */
    updateSetting(req: UpdateSettingRequest): Promise<UpdateSettingResponse>;
  }
  export interface StatsAPI {
    /**
     * create or update stats
     */
    createStats(req: CreateStatsRequest): Promise<CreateStatsResponse>;
    /**
     * list stats
     */
    listStats(req: ListStatsRequest): Promise<ListStatsResponse>;
  }
  export interface InvitationAPI {
    /**
     * Create invitation 可以用于发送邀请码
     */
    createInvitation(req: CreateInvitationRequest): Promise<CreateInvitationResponse>;
    /**
     * List invitations
     */
    listInvitations(req: ListInvitationsRequest): Promise<ListInvitationsResponse>;
    /**
     * bulk upsert invitations
     */
    updateInvitations(req: UpdateInvitationsRequest): Promise<UpdateInvitationsResponse>;
    /**
     * Get invitation by id
     */
    getInvitation(req: GetInvitationRequest): Promise<GetInvitationResponse>;
    /**
     * Update invitation
     */
    updateInvitation(req: UpdateInvitationRequest): Promise<UpdateInvitationResponse>;
    /**
     * delete invitation
     */
    deleteInvitation(req: DeleteInvitationRequest): Promise<DeleteInvitationResponse>;
  }
  export interface FormIdAPI {
    /**
     * Save formId 保存小程序 formId
     */
    createFormId(req: CreateFormIdRequest): Promise<CreateFormIdResponse>;
  }
  export interface ReplyAPI {
    /**
     * list all replies
     */
    listReplies(req: ListRepliesRequest): Promise<ListRepliesResponse>;
    /**
     * create a reply
     */
    createReply(req: CreateReplyRequest): Promise<CreateReplyResponse>;
    /**
     * get reply
     */
    getReply(req: GetReplyRequest): Promise<GetReplyResponse>;
    /**
     * delete a reply
     */
    deleteReply(req: DeleteReplyRequest): Promise<DeleteReplyResponse>;
    /**
     * update a reply
     */
    updateReply(req: UpdateReplyRequest): Promise<UpdateReplyResponse>;
  }

  type CreatePaymentRequest = {
    body: CreatePaymentBody;
  };

  type CreatePaymentResponse = {
    body: CreatePaymentResponse;
  };

  type GetSignatureRequest = {
    query: {
      filter: {
        url: string;
      };
    };
  };

  type GetSignatureResponse = {
    body: GetSignatureResponse;
  };

  type GetMsgSecCheckRequest = {
    query: {
      filter: {
        content: string;
      };
    };
  };

  type GetMsgSecCheckResponse = {
    body: GetMsgSecCheckResponse;
  };

  type ListMembersRequest = {
    query: {
      limit?: number;
      offset?: string;
      sort?: string;
      select?: string;

      filter: {
        users?: string;
        active?: boolean;
      };
    };
  };

  type ListMembersResponse = {
    body: Array<Member>;
    headers: {
      xTotalCount: string;
    };
  };

  type CreateMemberRequest = {
    body: Member;
  };

  type CreateMemberResponse = {
    body: Member;
  };

  type GetMemberRequest = {
    user: string;
  };

  type GetMemberResponse = {
    body: Member;
  };

  type DeleteMemberRequest = {
    user: string;
  };

  type UpdateMemberRequest = {
    user: string;
    body: Member;
  };

  type UpdateMemberResponse = {
    body: Member;
  };

  type ListProductsRequest = {
    query: {
      limit?: number;
      offset?: string;
      sort?: string;
      select?: string;

      filter: {
        published?: boolean;
      };
    };
  };

  type ListProductsResponse = {
    body: Array<Product>;
    headers: {
      xTotalCount: string;
    };
  };

  type CreateProductRequest = {
    body: Product;
  };

  type CreateProductResponse = {
    body: Product;
  };

  type GetProductRequest = {
    productId: string;
  };

  type GetProductResponse = {
    body: Product;
  };

  type DeleteProductRequest = {
    productId: string;
  };

  type UpdateProductRequest = {
    productId: string;
    body: Product;
  };

  type UpdateProductResponse = {
    body: Product;
  };

  type ListOrdersRequest = {
    query: {
      limit?: number;
      offset?: string;
      sort?: string;
      populate?: string;
      select?: string;

      filter: {
        paid?: boolean;
        method?: string;
        createdBy?: string;
      };
    };
  };

  type ListOrdersResponse = {
    body: Array<Order>;
    headers: {
      xTotalCount: string;
    };
  };

  type CreateOrderRequest = {
    body: Order;
  };

  type CreateOrderResponse = {
    body: Order;
  };

  type GetOrderRequest = {
    orderId: string;
  };

  type GetOrderResponse = {
    body: Order;
  };

  type DeleteOrderRequest = {
    orderId: string;
  };

  type UpdateOrderRequest = {
    orderId: string;
    body: Order;
  };

  type UpdateOrderResponse = {
    body: Order;
  };

  type GetSettingRequest = {
    user: string;
  };

  type GetSettingResponse = {
    body: Setting;
  };

  type DeleteSettingRequest = {
    user: string;
  };

  type UpdateSettingRequest = {
    user: string;
    body: Setting;
  };

  type UpdateSettingResponse = {
    body: Setting;
  };

  type CreateStatsRequest = {
    body: Stats;
  };

  type CreateStatsResponse = {
    body: Stats;
  };

  type ListStatsRequest = {
    query: {
      limit?: number;
      offset?: string;
      sort?: string;
      select?: string;

      filter: {
        user: string;
        date: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type ListStatsResponse = {
    body: Array<Member>;
    headers: {
      xTotalCount: string;
    };
  };

  type CreateInvitationRequest = {
    body: CreateInvitationBody;
  };

  type CreateInvitationResponse = {
    body: Invitation;
  };

  type ListInvitationsRequest = {
    query: {
      limit?: number;
      offset?: string;

      filter: {
        ns?: string;
        sub?: string;
        code?: string;
        phone?: string;
        used?: string;
      };
    };
  };

  type ListInvitationsResponse = {
    body: Array<Invitation>;
    headers: {
      xTotalCount: string;
    };
  };

  type UpdateInvitationsRequest = {
    body: Array<UpdateInvitationsBody>;
  };

  type UpdateInvitationsResponse = {
    body: Array<Invitation>;
  };

  type GetInvitationRequest = {
    invitationId: string;
  };

  type GetInvitationResponse = {
    body: Invitation;
  };

  type UpdateInvitationRequest = {
    invitationId: string;
    body: UpdateInvitationBody;
  };

  type UpdateInvitationResponse = {
    body: Invitation;
  };

  type DeleteInvitationRequest = {
    invitationId: string;
  };

  type CreateFormIdRequest = {
    body: CreateFormIdBody;
  };

  type CreateFormIdResponse = {
    body: FormId;
  };

  type ListRepliesRequest = {
    query: {
      limit?: number;
      offset?: string;
      sort?: string;
      select?: string;

      filter: {
        active?: boolean;
      };
    };
  };

  type ListRepliesResponse = {
    body: Array<Reply>;
    headers: {
      xTotalCount: string;
    };
  };

  type CreateReplyRequest = {
    body: Reply;
  };

  type CreateReplyResponse = {
    body: Reply;
  };

  type GetReplyRequest = {
    replyId: string;
  };

  type GetReplyResponse = {
    body: Reply;
  };

  type DeleteReplyRequest = {
    replyId: string;
  };

  type UpdateReplyRequest = {
    replyId: string;
    body: Reply;
  };

  type UpdateReplyResponse = {
    body: Reply;
  };

  type StatsData = {
    value: number;
  };

  type Stats = {
    id: string;
    createdAt: string;
    updatedAt: string;
    user: string;
    date: string;
    data: {
      value: number;
    };
  };

  type CreatePaymentBody = {
    openid: string;
    product: string;
    user: {};
  };

  type CreatePaymentResponse = {
    appid: string;
    timeStamp: string;
    nonceStr: string;
    package: string;
    signType: string;
    paySign: string;
  };

  type GetSignatureResponse = {
    debug: boolean;
    appId: string;
    timestamp: string;
    nonceStr: string;
    signature: string;
    jsApiList: Array<string>;
  };

  type GetMsgSecCheckResponse = {
    errcode: number;
    errMsg: string;
  };

  type Period = {
    start: string;
    end: string;
    trial: boolean;
    product: string;
    active: string;
  };

  type Member = {
    id: string;
    createdAt: string;
    updatedAt: string;
    user: string;
    period: Array<{
      start: string;
      end: string;
      trial: boolean;
      product: string;
      active: string;
    }>;
    active: boolean;
  };

  type Order = {
    id: string;
    createdAt: string;
    updatedAt: string;
    no: string;
    product: string;
    method: string;
    paidAt: string;
    data: {};
    user: {};
    status: string;
    comment: string;
    fee: number;
    createdBy: string;
  };

  type PriceItem = {
    purchaseStart: string;
    purchaseEnd: string;
    period: number;
    start: date;
    end: date;
    price: number;
  };

  type Product = {
    id: string;
    createdAt: string;
    updatedAt: string;
    slug: string;
    price: number;
    priceItems: Array<{
      purchaseStart: string;
      purchaseEnd: string;
      period: number;
      start: date;
      end: date;
      price: number;
    }>;
    originalPrice: number;
    name: string;
    description: string;
    start: string;
    end: string;
    period: number;
    published: boolean;
    publishedAt: string;
  };

  type Setting = {
    user: string;
    birthday: string;
    alarm: string;
    disableAlarm: boolean;
    openid: string;
    appOpenid: string;
  };

  type Invitation = {
    id: string;
    createdAt: string;
    code: string;
    email: string;
    phone: string;
    expireAt: string;
    period: number;
    start: string;
    end: string;
    used: boolean;
    usedAt: string;
    usedBy: string;
    user: {};
    source: string;
    comment: string;
  };

  type UpdateInvitationBody = {
    start: string;
    end: string;
    period: number;
    source: string;
    comment: string;
    used: boolean;
    usedBy: string;
    user: {};
    email: string;
    phone: string;
  };

  type UpdateInvitationsBody = {
    id: string;
    code: string;
    start: string;
    end: string;
    period: number;
  };

  type CreateInvitationBody = {
    start: string;
    end: string;
    period: number;
    email: string;
    phone: string;
  };

  type CreateFormIdBody = {
    user: string;
    formId: string;
  };

  type FormId = {
    user: string;
    formId: string;
    used: string;
    expiredAt: string;
  };

  type ImageContent = {
    media_id: string;
    url: string;
    filename: string;
  };

  type LinkContent = {
    title: string;
    description: string;
    url: string;
    thumb_url: string;
  };

  type Reply = {
    type: string;
    keyword: string;
    msgtype: string;
    content: string;
    image: {
      media_id: string;
      url: string;
      filename: string;
    };
    link: {
      title: string;
      description: string;
      url: string;
      thumb_url: string;
    };
    active: boolean;
    index: number;
  };

  type Err = {
    code: string;
    message: string;
  };
}
