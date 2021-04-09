import { classes } from "@automapper/classes"
import { AutomapperModule } from "@automapper/nestjs";
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { ProductsModule } from './products/products.module';
import { UuidmoduleModule } from './uuidmodule/uuidmodule.module';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot(),
    AutomapperModule.forRoot(
      {
        options: [{ name: '', pluginInitializer: classes }],
        singular: true
      }
    ),
    UuidmoduleModule,
  ],
  controllers: [],
  providers: [ClassSerializerInterceptor],
})
export class AppModule {
}
