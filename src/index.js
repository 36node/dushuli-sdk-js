import fetch from "@36node/fetch";
import { denormalize } from "@36node/query-normalizr";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    if (this.token) {
      return `Bearer ${this.token}`;
    }

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token fro authorization
   */
  constructor(opt = {}) {
    this.base = opt.base || "";
    this.token = opt.token || "";
  }

  /**
   * wechat's methods
   */
  wechat = {
    /**
     * initiate a payment process
     *
     * @param {CreatePaymentRequest} req createPayment request
     * @returns {Promise<CreatePaymentResponse>} Expected response to a valid request
     */
    createPayment: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createPayment");

      return fetch(`${this.base}/wechat/payment`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * get wechat js sdk signature
     *
     * @param {GetSignatureRequest} req getSignature request
     * @returns {Promise<GetSignatureResponse>} Expected response to a valid request
     */
    getSignature: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for wechat");

      return fetch(`${this.base}/wechat/signature`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * member's methods
   */
  member = {
    /**
     * list all members
     *
     * @param {ListMembersRequest} req listMembers request
     * @returns {Promise<ListMembersResponse>} a paged array of members
     */
    listMembers: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/members`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * create a member
     *
     * @param {CreateMemberRequest} req createMember request
     * @returns {Promise<CreateMemberResponse>} the member created
     */
    createMember: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createMember");

      return fetch(`${this.base}/members`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * get member by user
     *
     * @param {GetMemberRequest} req getMember request
     * @returns {Promise<GetMemberResponse>} Expected response to a valid request
     */
    getMember: (req = {}) => {
      const { user, headers } = req;

      if (!user) throw new Error("user is required for getMember");

      return fetch(`${this.base}/members/${user}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * delete a member
     *
     * @param {DeleteMemberRequest} req deleteMember request
     * @returns {Promise<DeleteMemberResponse>} member deleted
     */
    deleteMember: (req = {}) => {
      const { user, headers } = req;

      if (!user) throw new Error("user is required for deleteMember");

      return fetch(`${this.base}/members/${user}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * update a member
     *
     * @param {UpdateMemberRequest} req updateMember request
     * @returns {Promise<UpdateMemberResponse>} Expected response to a valid request
     */
    updateMember: (req = {}) => {
      const { user, headers, body } = req;

      if (!user) throw new Error("user is required for updateMember");
      if (!body) throw new Error("requetBody is required for updateMember");

      return fetch(`${this.base}/members/${user}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * product's methods
   */
  product = {
    /**
     * list all products
     *
     * @param {ListProductsRequest} req listProducts request
     * @returns {Promise<ListProductsResponse>} a paged array of products
     */
    listProducts: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/products`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * create a product
     *
     * @param {CreateProductRequest} req createProduct request
     * @returns {Promise<CreateProductResponse>} the product created
     */
    createProduct: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createProduct");

      return fetch(`${this.base}/products`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * get product by productId
     *
     * @param {GetProductRequest} req getProduct request
     * @returns {Promise<GetProductResponse>} Expected response to a valid request
     */
    getProduct: (req = {}) => {
      const { productId, headers } = req;

      if (!productId) throw new Error("productId is required for getProduct");

      return fetch(`${this.base}/products/${productId}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * delete a product
     *
     * @param {DeleteProductRequest} req deleteProduct request
     * @returns {Promise<DeleteProductResponse>} product deleted
     */
    deleteProduct: (req = {}) => {
      const { productId, headers } = req;

      if (!productId)
        throw new Error("productId is required for deleteProduct");

      return fetch(`${this.base}/products/${productId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * update product
     *
     * @param {UpdateProductRequest} req updateProduct request
     * @returns {Promise<UpdateProductResponse>} Expected response to a valid request
     */
    updateProduct: (req = {}) => {
      const { productId, headers, body } = req;

      if (!productId)
        throw new Error("productId is required for updateProduct");
      if (!body) throw new Error("requetBody is required for updateProduct");

      return fetch(`${this.base}/products/${productId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * order's methods
   */
  order = {
    /**
     * list all orders
     *
     * @param {ListOrdersRequest} req listOrders request
     * @returns {Promise<ListOrdersResponse>} a paged array of orders
     */
    listOrders: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/orders`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * create a order
     *
     * @param {CreateOrderRequest} req createOrder request
     * @returns {Promise<CreateOrderResponse>} the order created
     */
    createOrder: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createOrder");

      return fetch(`${this.base}/orders`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * get order by orderId
     *
     * @param {GetOrderRequest} req getOrder request
     * @returns {Promise<GetOrderResponse>} Expected response to a valid request
     */
    getOrder: (req = {}) => {
      const { orderId, headers } = req;

      if (!orderId) throw new Error("orderId is required for getOrder");

      return fetch(`${this.base}/orders/${orderId}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * delete a order
     *
     * @param {DeleteOrderRequest} req deleteOrder request
     * @returns {Promise<DeleteOrderResponse>} order deleted
     */
    deleteOrder: (req = {}) => {
      const { orderId, headers } = req;

      if (!orderId) throw new Error("orderId is required for deleteOrder");

      return fetch(`${this.base}/orders/${orderId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * update order
     *
     * @param {UpdateOrderRequest} req updateOrder request
     * @returns {Promise<UpdateOrderResponse>} Expected response to a valid request
     */
    updateOrder: (req = {}) => {
      const { orderId, headers, body } = req;

      if (!orderId) throw new Error("orderId is required for updateOrder");
      if (!body) throw new Error("requetBody is required for updateOrder");

      return fetch(`${this.base}/orders/${orderId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * setting's methods
   */
  setting = {
    /**
     * get setting by user
     *
     * @param {GetSettingRequest} req getSetting request
     * @returns {Promise<GetSettingResponse>} Expected response to a valid request
     */
    getSetting: (req = {}) => {
      const { user, headers } = req;

      if (!user) throw new Error("user is required for getSetting");

      return fetch(`${this.base}/settings/${user}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * delete a setting
     *
     * @param {DeleteSettingRequest} req deleteSetting request
     * @returns {Promise<DeleteSettingResponse>} setting deleted
     */
    deleteSetting: (req = {}) => {
      const { user, headers } = req;

      if (!user) throw new Error("user is required for deleteSetting");

      return fetch(`${this.base}/settings/${user}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * update a setting
     *
     * @param {UpdateSettingRequest} req updateSetting request
     * @returns {Promise<UpdateSettingResponse>} Expected response to a valid request
     */
    updateSetting: (req = {}) => {
      const { user, headers, body } = req;

      if (!user) throw new Error("user is required for updateSetting");
      if (!body) throw new Error("requetBody is required for updateSetting");

      return fetch(`${this.base}/settings/${user}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * stats's methods
   */
  stats = {
    /**
     * create or update stats
     *
     * @param {CreateStatsRequest} req createStats request
     * @returns {Promise<CreateStatsResponse>} Expected response to a valid request
     */
    createStats: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createStats");

      return fetch(`${this.base}/stats`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * list stats
     *
     * @param {ListStatsRequest} req listStats request
     * @returns {Promise<ListStatsResponse>} a paged array of members
     */
    listStats: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for stats");

      return fetch(`${this.base}/stats`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * invitation's methods
   */
  invitation = {
    /**
     * Create invitation 可以用于发送邀请码
     *
     * @param {CreateInvitationRequest} req createInvitation request
     * @returns {Promise<CreateInvitationResponse>} The invitaion created
     */
    createInvitation: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createInvitation");

      return fetch(`${this.base}/invitations`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List invitations
     *
     * @param {ListInvitationsRequest} req listInvitations request
     * @returns {Promise<ListInvitationsResponse>} A paged array of invitations
     */
    listInvitations: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/invitations`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * bulk upsert invitations
     *
     * @param {UpdateInvitationsRequest} req updateInvitations request
     * @returns {Promise<UpdateInvitationsResponse>} The invitations be uperted
     */
    updateInvitations: (req = {}) => {
      const { headers, body } = req;

      if (!body)
        throw new Error("requetBody is required for updateInvitations");

      return fetch(`${this.base}/invitations`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get invitation by id
     *
     * @param {GetInvitationRequest} req getInvitation request
     * @returns {Promise<GetInvitationResponse>} The invitation with given id
     */
    getInvitation: (req = {}) => {
      const { invitationId, headers } = req;

      if (!invitationId)
        throw new Error("invitationId is required for getInvitation");

      return fetch(`${this.base}/invitations/${invitationId}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update invitation
     *
     * @param {UpdateInvitationRequest} req updateInvitation request
     * @returns {Promise<UpdateInvitationResponse>} The invitation
     */
    updateInvitation: (req = {}) => {
      const { invitationId, headers, body } = req;

      if (!invitationId)
        throw new Error("invitationId is required for updateInvitation");
      if (!body) throw new Error("requetBody is required for updateInvitation");

      return fetch(`${this.base}/invitations/${invitationId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * delete invitation
     *
     * @param {DeleteInvitationRequest} req deleteInvitation request
     * @returns {Promise<DeleteInvitationResponse>} invitation deleted
     */
    deleteInvitation: (req = {}) => {
      const { invitationId, headers } = req;

      if (!invitationId)
        throw new Error("invitationId is required for deleteInvitation");

      return fetch(`${this.base}/invitations/${invitationId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * formId's methods
   */
  formId = {
    /**
     * Save formId 保存小程序 formId
     *
     * @param {CreateFormIdRequest} req createFormId request
     * @returns {Promise<CreateFormIdResponse>} The formId created
     */
    createFormId: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createFormId");

      return fetch(`${this.base}/formIds`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * reply's methods
   */
  reply = {
    /**
     * list all replies
     *
     * @param {ListRepliesRequest} req listReplies request
     * @returns {Promise<ListRepliesResponse>} a paged array of replies
     */
    listReplies: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/replies`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * create a reply
     *
     * @param {CreateReplyRequest} req createReply request
     * @returns {Promise<CreateReplyResponse>} the reply created
     */
    createReply: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createReply");

      return fetch(`${this.base}/replies`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * get reply
     *
     * @param {GetReplyRequest} req getReply request
     * @returns {Promise<GetReplyResponse>} Expected response to a valid request
     */
    getReply: (req = {}) => {
      const { replyId, headers } = req;

      if (!replyId) throw new Error("replyId is required for getReply");

      return fetch(`${this.base}/replies/${replyId}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * delete a reply
     *
     * @param {DeleteReplyRequest} req deleteReply request
     * @returns {Promise<DeleteReplyResponse>} reply deleted
     */
    deleteReply: (req = {}) => {
      const { replyId, headers } = req;

      if (!replyId) throw new Error("replyId is required for deleteReply");

      return fetch(`${this.base}/replies/${replyId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * update a reply
     *
     * @param {UpdateReplyRequest} req updateReply request
     * @returns {Promise<UpdateReplyResponse>} Expected response to a valid request
     */
    updateReply: (req = {}) => {
      const { replyId, headers, body } = req;

      if (!replyId) throw new Error("replyId is required for updateReply");
      if (!body) throw new Error("requetBody is required for updateReply");

      return fetch(`${this.base}/replies/${replyId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
