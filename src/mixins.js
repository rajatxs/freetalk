
import router from './router'

export const routing = {
  methods: {
    // Redirect to previous page
    back() {
      router.back();
    }
  }
};