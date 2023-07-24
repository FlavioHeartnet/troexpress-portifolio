import { fail } from "@sveltejs/kit";
import { sendEmail } from "../email-handler";

export const actions = {
	default: async ({ request }) => {
		const body = await request.formData();
		const name = body.get('name')?.toString() ?? '';
        const email = body.get('email')?.toString() ?? '';
        const phone = body.get('phone')?.toString() ?? '';
        const message = body.get('message')?.toString() ?? '';

        const messageId = await sendEmail({
            name,
            email,
            phone,
            message
        });
        if(messageId){
            return {
                body: {
                    success: true,
                    messageId
                }
            }
        }

		return fail(404, { notFound: true });
	}
};