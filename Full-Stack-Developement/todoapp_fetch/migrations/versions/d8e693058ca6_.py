"""empty message

Revision ID: d8e693058ca6
Revises: 12cdf156ae44
Create Date: 2020-04-03 00:05:22.738006

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd8e693058ca6'
down_revision = '12cdf156ae44'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('todos', sa.Column('completed', sa.Boolean(), nullable=True))
    op.execute('UPDATE todos SET completed = False WHERE completed IS NULL;')
    op.alter_column('todos', 'completed', nullable = False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('todos', 'completed')
    # ### end Alembic commands ###
