import ApiModule from './api-module'
import {AvatarId} from '../types/common'
import {AvatarInfo, AvatarSearchRequest} from '../types/avatar'
import {UserInfoResponse} from '../types/user'

export default class Avatar extends ApiModule {
  async getById(avatarId: AvatarId): Promise<AvatarInfo> {
    const result = await this.getReq(`avatars/${avatarId}`)
    return result.data
  }

  async choose(avatarId: AvatarId): Promise<UserInfoResponse> {
    const result = await this.putReq(`avatars/${avatarId}/select`)
    return result.data
  }

}