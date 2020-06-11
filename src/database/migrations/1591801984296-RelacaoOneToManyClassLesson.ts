import {MigrationInterface, QueryRunner} from "typeorm";

export class RelacaoOneToManyClassLesson1591801984296 implements MigrationInterface {
    name = 'RelacaoOneToManyClassLesson1591801984296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lessons" ADD "classeId" integer`);
        await queryRunner.query(`ALTER TABLE "lessons" ADD CONSTRAINT "FK_59fbe91c4ef1fd80b30f070b715" FOREIGN KEY ("classeId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lessons" DROP CONSTRAINT "FK_59fbe91c4ef1fd80b30f070b715"`);
        await queryRunner.query(`ALTER TABLE "lessons" DROP COLUMN "classeId"`);
    }

}
