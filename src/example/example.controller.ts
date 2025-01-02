import { Controller, Get } from '@nestjs/common';
import { CustomHeader } from 'src/custom-decorator/custom-header.decorator';

@Controller('example')
export class ExampleController {

    @Get()
    getExample(@CustomHeader('authorization') authHeader: string) {

        return { authHeader }; // Trả về giá trị của header `authorization`
    }

}
