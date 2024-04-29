import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 创建一个函数，接收消息和配置为参数
const notify = (message) => {
  toast(message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default notify;