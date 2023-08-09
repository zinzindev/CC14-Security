const bcrypt = require('bcryptjs');

const password = '123456';
const hashedPassword =
	'$2a$18$Gl67mY/6Fi9Q8RHPnrr5GeGzb/HGpmTyhpeHoU6t0PTc62TviRLW2';

// 1. หา Salt
// 2. เอา Salt + password ทีจะ check
// 3. เอาที่ได้จาก (2) ไปเข้า function hash
// 4. เปรียบเทียบ (3) กับ hashed value ถ้าเท่ากันแสดงว่าข้อมูลถูก

const run = async () => {
	// const hashed = await bcrypt.hash(password, 10);
	// console.log(hashed);

	const result = await bcrypt.compare(password, hashedPassword);
	console.log(result);
};

run();
