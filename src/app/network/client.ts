import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

declare module "axios" {
	export interface AxiosRequestConfig {
		errorConfig?: {
			disableInterceptor?: (error: any) => boolean;
		};
		onConfirm?: () => void;
		onCancel?: () => void;
		onClose?: () => void;
	}
}

class Client {
	clientInstance: AxiosInstance;
	constructor() {
		this.clientInstance = axios.create({
			baseURL: 'http://localhost:9000',
			headers: {}
		});
	}


	get = (args: { url: string; config?: AxiosRequestConfig<any> }) => {
		return this.clientInstance.get(args.url, args.config);
	};

	post = (args: {
		url: string;
		data?: any;
		config?: AxiosRequestConfig<any>;
	}) => {
		return this.clientInstance.post(args.url, args.data, args.config);
	};

	put = (args: {
		url: string;
		data?: any;
		config?: AxiosRequestConfig<any>;
	}) => {
		return this.clientInstance.put(args.url, args.data, args.config);
	};

	delete = (args: { url: string; config?: AxiosRequestConfig<any> }) => {
		return this.clientInstance.delete(args.url, args.config);
	};

	patch = (args: {
		url: string;
		data?: any;
		config?: AxiosRequestConfig<any>;
	}) => {
		return this.clientInstance.patch(args.url, args.data, args.config);
	};
}

export default new Client();
