
import { ArrowLeftIcon } from 'vue-feather-icons'
import ActionIcon from '@/components/ActionIcon'

import router from './router'

export const routing = {
  methods: {
    // Redirect to previous page
    back() {
      router.back();
    }
  }
};

export const PrimaryTopActionBar = {
  components: {
    'arrow-left-icon': ArrowLeftIcon,
    'action-icon': ActionIcon
  }
}