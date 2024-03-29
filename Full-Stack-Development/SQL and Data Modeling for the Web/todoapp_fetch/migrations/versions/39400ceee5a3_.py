"""empty message

Revision ID: 39400ceee5a3
Revises: 0eed4c73dd80
Create Date: 2020-04-04 21:13:18.514335

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '39400ceee5a3'
down_revision = '0eed4c73dd80'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('todos', 'completed',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('todos', 'completed',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    # ### end Alembic commands ###
