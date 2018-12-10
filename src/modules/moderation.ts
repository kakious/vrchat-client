import ApiModule from './api-module'
import {ModerationId, StatusResponse, UserId} from '../types/common'
import {ModerationInfo, PlayerModerationType, SendModerationResponse} from '../types/moderation'

export default class Moderation extends ApiModule {
  async send(userId: UserId): Promise<SendModerationResponse> {
    const result = await this.postReq(`user/${userId}/moderations`)
    return result.data
  }

  async block(userId: UserId): Promise<ModerationInfo> {
    const result = await this.postReq('auth/user/blocks', {blocked: userId})
    return result.data
  }

  async unblock(userId: UserId): Promise<StatusResponse> {
    const result = await this.putReq('auth/user/unblocks', {blocked: userId})
    return result.data
  }

  async sendPlayer(userId: UserId, type: PlayerModerationType): Promise<ModerationInfo> {
    const result = await this.postReq('auth/user/playermoderations', {type: type, moderated: userId})
    return result.data
  }

  async delete(userId: UserId, moderationId: ModerationId): Promise<StatusResponse> {
    const result = await this.deleteReq(`user/${userId}/moderations/${moderationId}`)
    return result.data
  }

  async clear(userId: UserId): Promise<StatusResponse> {
    const result = await this.deleteReq(`user/${userId}/moderations`)
    return result.data
  }


}
